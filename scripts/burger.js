const burgers = document.querySelectorAll('.burger');
burgers.forEach(burger => {
    burger.addEventListener('click', function (e) {
        const menubar = document.querySelector('.sidebar');
        burgers.forEach(b => b.classList.toggle('burger_active'));
        menubar.classList.toggle("actives");
    });
});