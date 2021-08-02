/**
 * Написать функцию, принимающую список url путей и возвращающую промис,
 * который резолвит результаты всех запросов по указанным url (важно: резолвит массив значений, резолвит не раньше последнего из запросов,
 * функцию запроса взять из ссылки на gist, не использовать Promise.all)
 * P.S. список url - так как функция запроса фейковая, то под списком url стоить понимать любой массив строк.
 */

const URLS = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
];

function request(url) {
    return new Promise((res) => {
        const ms = Math.floor(Math.random() * 10000) + 1;
        setTimeout(() => res(url), ms);
    });
}

function willGetUrls(urls) {
    if (!urls || !urls.length) { return Promise.resolve([])}

    return new Promise(function(resolve) {
        let count = urls.length;
        const res = [];

        urls.forEach(function(url, i) {

            request(url).then(function(requestUrl) {
                fetch(requestUrl.toString())
                    .then(response => response.status === 200 ? response.text() : Promise.reject(res))
                    .then(data => res[i] = JSON.parse(data));

                if (--count < 1) {
                    resolve(res);
                }
            })
        });
    });
}