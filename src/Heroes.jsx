import { useState } from "react"

function Heroes(){
  const [names, setNames] = useState([
      "Шерлок Холмс", 
      "Доктор Ватсон", 
      "Профессор Мориарти",
      "Миссис Хадсон",
      "Ирен Адлер"
  ])
  return(
    <ul>
      {names.map((i, idx) => {
        return (
          <li key={idx}>{i}</li>
        )
      })}
    </ul>
  )
}
export default Heroes