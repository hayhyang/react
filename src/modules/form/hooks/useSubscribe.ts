import { useEffect, useRef } from 'react';
import { Subject } from '../utils/createSubject';

type Props = {
  disabled?: boolean;
  subject: Subject;
  next: (value: any) => void;
};

export const useSubscribe = (props: Props) => {
  const _props = useRef(props);
  _props.current = props;

  useEffect(() => {
    const subscription =
      !props.disabled &&
      _props.current.subject &&
      _props.current.subject.subscribe({
        next: _props.current.next,
      });

    return () => {
      subscription && subscription.unsubscribe();
    };
  }, [props.disabled]);
};
