document.body.addEventListener('click', function(event) {
            let div = document.createElement('div');

            let size = (Math.random() * 50).toFixed(0);
            let half = size / 2;

            div.style.width = `${size}px`;
            div.style.height = `${size}px`;
            div.style.borderRadius = ``
        }