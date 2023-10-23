let users = [{
    id: '680244b7-59b4-47f5-9885-479cd9f298fc',
    name: 'Administrator',
    email: 'admin@admin.com',
    role: 'Administrator',
    creationDate: '2023-12-10',
},
{
    id: 'd6f73559-cfad-410b-871c-f547bb9094c5',
    name: 'Agustina Chiodinni',
    email: 'aguschio@gmail.com',
    role: 'User',
    creationDate: '2023-12-10',
}];

function loadUserTable(users) {
    const tableBody = document.getElementById('table-body-users');
    tableBody.innerHTML = '';

    users.forEach(user => {
        const row = `
            <tr class="text-center | letter-spacing">
                <td class="border-right-dashed">${user.name}</td>
                <td class="border-right-dashed">${user.email}</td>
                <td class="border-right-dashed">${user.role}</td>
                <td>
                    <button type="button" class="btn btn-outline-danger" onclick="deleteUser('${user.id}')">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function deleteUser(id) {
    const indexToDelete = users.findIndex(item => item.id === id);

    if (indexToDelete !== -1) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this user!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                users.splice(indexToDelete, 1);
                loadUserTable(users);
                Swal.fire(
                    'Deleted!',
                    'User has been deleted.',
                    'success'
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'User is safe :)',
                    'error'
                );
            }
        });
    }
}

function applyFiltersAndSearch() {
    const categoryFilter = document.querySelector('input[name="category"]:checked').value;
    const searchTerm = document.getElementById('search-product').value.toLowerCase();

    let filteredUsers = users;

    if (categoryFilter && categoryFilter !== 'All') {
        filteredUsers = users.filter(user => user.role === categoryFilter);
    }

    if (searchTerm) {
        filteredUsers = filteredUsers.filter(user => user.name.toLowerCase().includes(searchTerm) || user.email.toLowerCase().includes(searchTerm));
    }

    loadUserTable(filteredUsers);
}

document.querySelectorAll('input[name="category"]').forEach(radio => {
    radio.addEventListener('change', applyFiltersAndSearch);
});

document.getElementById('search-product').addEventListener('input', applyFiltersAndSearch);

loadUserTable(users);
