const NoVocals = () =>{

    const onKeyDown = (event) =>{
        console.log("Se introdujo una tecla",event.key);
        const vocales = ['a','e','i','o','u','A','E','I','O','U']
        if(vocales.includes(event.key)){
            event.preventDefault()
        }
    
    }

    return (
        <div>

            <div className="m-10">No se admiten vocales</div>
            <input onKeyDown={onKeyDown} type="text" className="border-solid border-current -border-2
" ></input>

        </div>
    )

} 
export default NoVocals