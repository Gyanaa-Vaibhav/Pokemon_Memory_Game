// Done Final Changes Confirm

export default function useFetch(url, setter) {
    try { 
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setter(prev => [...prev, data]);
        })
    } catch (error) {
        console.log("There Was an Error ",error)
    }
}