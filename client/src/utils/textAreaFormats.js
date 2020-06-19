export const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'code',
    'font',
    'align',
]

export const modules = {
    toolbar: [
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        [{ font: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ color: [] }],
        [{ align: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        ['clean'],
    ],
}

export const headerModules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6] }],
        [{ font: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['link'],
        ['clean'],
    ],
}
