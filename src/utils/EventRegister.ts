
interface Event {
    name: string;
    run: (...args: any[]) => void;
}


class EventRegister {

    events: Event[] = [];

    register(name: string, callback: (...args: any[]) => void): Event {
        const event = { name: name, run: callback };
        this.events.push({ name: name, run: callback });

        return event;
    }

    execute(name: string, ...args: any[]) {
        this.events.filter(event => event.name === name).forEach(event => event.run(args))
    }

    unregiter(event: Event) {
        this.events = this.events.filter(currEvent => event != currEvent)
    }

}

const eventRegister = new EventRegister();

const useEventRegister = () => eventRegister

export {
    useEventRegister
}

export default EventRegister;