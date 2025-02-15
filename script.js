let form = document.querySelector('form');
let avatar = document.querySelector('.avatar');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    let nameInput = form.querySelector('input[name="user_name"]');
    let name = nameInput.value;

    let styleInput = form.querySelector('input[name="style"]:checked');
    let style = styleInput.value;

    generateAvatar(name, style);
});

async function generateAvatar(seed, style) {

    let result = await fetch(`https://api.dicebear.com/9.x/${style}/svg?seed=${seed}`, {
        method: 'get'
    });

    let image = await result.text();

    avatar.innerHTML = image;

}