const btn = document.getElementById('enviar');
const input = document.getElementById('apilink');

async function req() {
   const url = input.value;
   fetch(`${url}`)
      .then((response) => {
         if (!response.ok) {
            throw new Error(`status: ${response.status}`);
         }
         return response.json();
      })

      .then((data) => {
         let jsonString = JSON.stringify(data, null, 2);
         document.getElementById('content').innerText = jsonString;
      })

      .catch((error) => {
         document.getElementById(
            'content'
         ).innerText = `Error: ${error.message}`;
      });
}

btn.addEventListener('click', () => {
   req();
});

input.addEventListener('keypress', (event) => {
   if (event.key === 'Enter') {
      req();
   }
});
