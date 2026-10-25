const ModalCloser = (ref, state, event, ...rest) => {
    if (ref.current && !ref.current.contains(event.target)) {
        state(false)
    }

    rest.forEach(callback => {
        if (typeof callback === 'function') {
            callback();
        }
    });
}
export default ModalCloser