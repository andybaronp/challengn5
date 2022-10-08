
const URL = './data.jsom'
export const data = async () => {
    
    const res = await fetch(URL)
    const data = await res.json()
}