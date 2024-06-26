import './styles.css'

export const Input = ({value,handleChange}) => {
    return (
        <input className='search-input' text="Pesquisar posts" value={value} onChange={handleChange}/>
    )
}