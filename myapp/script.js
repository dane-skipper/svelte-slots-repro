const init = (targetId) => {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) {
        throw new Error(`init function cannot find supplied targetEl ${targetEl}`)
    }
    targetEl.textContent = 'SOME NEW TEXT CONTENT'
}

window.someInitScript = init;