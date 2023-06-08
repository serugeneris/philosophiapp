console.log('js loaded');
const btn = document.getElementById('send-question');

const sendQuestion = async event => {
    const textArea = event.target.closest('div').querySelector('textarea');
    if (textArea && textArea.value !== '') {
        event.target.style.display = 'none';
        const loadingElem = event.target.closest('div').querySelector('.loader');
        loadingElem.style.display = 'flex';
        let responseString;
        try {
            const res = await fetch(window.location.protocol+ '//' + window.location.host + '/question', {
                method: 'POST',
                body: JSON.stringify({
                    question: textArea.value
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (res.status !== 200) {
                throw new Error('Something failed with the question.')
            }
            const resJson = await res.json();
            responseString = resJson.response;

        } catch(e) {
            responseString = e.message;
        }

        // after
        event.target.style.display = '';
        loadingElem.style.display = '';
        const response = event.target.closest('div').querySelector('.response')
        response.innerText = responseString;
        response.style.display = 'block';

    }
}

btn.addEventListener('click', sendQuestion);