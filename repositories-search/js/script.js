const content = document.querySelector('#repository-table-body');
const btn = document.querySelector('#btn');
const input = document.querySelector('#input');

let username = null;

function renderRepositories(repositories) {
    content.innerHTML = '';

    if (repositories.length === 0) {
        const noRepoRow = document.createElement('tr');
        const noRepoCell = document.createElement('td');
        noRepoCell.setAttribute('colspan', '4');
        noRepoCell.textContent = 'Nenhum repositório encontrado para este usuário.';
        noRepoRow.appendChild(noRepoCell);
        content.appendChild(noRepoRow);
    } else {
        repositories.forEach(({ name, description, language, stargazers_count }) => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            const nameLink = document.createElement('a');
            nameLink.href = `https://github.com/${username}/${name}`;
            nameLink.target = '_blank';
            nameLink.textContent = name;
            nameCell.appendChild(nameLink);

            const descriptionCell = document.createElement('td');
            descriptionCell.textContent = description || 'N/A';

            const languageCell = document.createElement('td');
            languageCell.textContent = language || 'N/A';

            const starsCell = document.createElement('td');
            starsCell.textContent = stargazers_count || '0';

            [nameCell, descriptionCell, languageCell, starsCell].forEach(cell => {
                row.appendChild(cell);
            });

            content.appendChild(row);
        });
    }
}

function getRepository() {
    axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
            if (response.status === 200) {
                const repositories = response.data;
                renderRepositories(repositories);
            } else {
                content.innerHTML = '';
                const errorRow = document.createElement('tr');
                const errorCell = document.createElement('td');
                errorCell.setAttribute('colspan', '4');
                errorCell.textContent = 'Erro ao acessar a API do GitHub.';
                errorRow.appendChild(errorCell);
                content.appendChild(errorRow);
            }
        })
        .catch((error) => {
            console.error(error);
            content.innerHTML = '';
            const errorRow = document.createElement('tr');
            const errorCell = document.createElement('td');
            errorCell.setAttribute('colspan', '4');
            errorCell.textContent = 'Erro ao acessar a API do GitHub.';
            errorRow.appendChild(errorCell);
            content.appendChild(errorRow);
        });
}

function submit(event) {
    if (event.key === "Enter" || event.type === "click") {
        username = input.value.trim();
        console.log(username);

        if (username === "") {
            alert("Digite o nome de usuário do GitHub!");
        } else {
            getRepository();
        }
    }
}

btn.addEventListener("click", submit);
input.addEventListener("keydown", submit);
