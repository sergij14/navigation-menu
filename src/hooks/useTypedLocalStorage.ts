import TypedLocalStore from 'typed-local-store';

export default function useTypedLocalStorage<T>() {
    const typedStorage = new TypedLocalStore<T>();

    return {
        typedStorage
    }
}