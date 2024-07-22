import { useLayoutEffect, useRef, useState } from "react"

export const PokemonCard = ({ id, name, sprites}) => {

  //  Esto de aca es para explicar lo del useLayoutEffect. Lo dejo comentado porque arruina la pagina de Pokemon
  // const h2Ref = useRef()
  // const [boxSize, setBoxSize] = useState( {width: 0, height: 0} );

  // useLayoutEffect(() => {
  //   const { height, width } = h2Ref.current.getBoundingClientRect();
  //   setBoxSize( {height, width} )
  // }, [])

  return (
    <>
      <section style={ { height:200 } }> 
          <h2 className="text-capitalize" > {/* Para ver lo del useLayoutEffect --> ref={ h2Ref } */ }
            #{ id } - { name }
            </h2>
          
          <div>
              {
                  sprites.map( sprite => (
                      <img key={ sprite } src={ sprite } alt={ name }/>
                  ))
              }
          
          </div>
      </section>
    
      {/* Esto de aca es para explicar lo del useLayoutEffect. Lo dejo comentado porque arruina la pagina de Pokemon */}
      {/*<code>{ JSON.stringify(boxSize) }</code>*/}
    </>
  )
}
