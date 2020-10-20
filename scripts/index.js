const firstMessage = 'First Message';
console.log(firstMessage);

document.getElementById('js-get-lazy').onclick = () => {
    import('./lazy').then(secondMessage => {
        secondMessage.showMessage();
    })
}
