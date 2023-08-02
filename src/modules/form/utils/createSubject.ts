export type Observer = {
  next: (value: any) => void;
};

export type Subscription = {
  unsubscribe: any;
};

export type Subject = {
  readonly observers: Observer[];
  subscribe: (value: Observer) => Subscription;
  unsubscribe: any;
} & Observer;

export default function createSubject() {
  let _observers: Observer[] = [];
  const next = (value: any) => {
    for (const observer of _observers) {
      observer.next && observer.next(value);
    }
  };

  const subscribe = (observer: Observer): Subscription => {
    _observers.push(observer);
    return {
      unsubscribe: () => {
        _observers = _observers.filter((o) => o !== observer);
      },
    };
  };

  const unsubscribe = () => {
    _observers = [];
  };

  return {
    get observers() {
      return _observers;
    },
    next,
    subscribe,
    unsubscribe,
  };
}
