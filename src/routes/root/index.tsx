export const RootRoute=()=>{
  
  return <div className=" flex flex_wrap gap-4 item-center justify-center" >
     {data.map((item)=>{return <div className="w-2xs p-8">{item.name}
    <img src={item.image} style={{width:'200px'}} />
    </div >

  })}</div>
}
const data = [
  {
    id: 1,
    image:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ed7f54e-9a9f-4bd6-aebe-b2b04cbb448e/da1hzd4-169292df-2ca0-4372-a5b9-78f0652bc09d.png/v1/fill/w_434,h_727/ash_and_greninja__pokemon_xyz__by_alexalan_da1hzd4-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI3IiwicGF0aCI6IlwvZlwvMWVkN2Y1NGUtOWE5Zi00YmQ2LWFlYmUtYjJiMDRjYmI0NDhlXC9kYTFoemQ0LTE2OTI5MmRmLTJjYTAtNDM3Mi1hNWI5LTc4ZjA2NTJiYzA5ZC5wbmciLCJ3aWR0aCI6Ijw9NDM0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZlwDIJ4gBECE2dEzvrNMgqeb_2Jb4Me0-JVuJm5otLA",
    name: "Green ninja ash",
    types: ["grass", "poison"],
  },
  {
    id: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/it/thumb/4/43/LucarioSSBU.png/1200px-LucarioSSBU.png",
    name: "lucario",
    types: ["fire"],
  },
  {
    id: 7,
    image:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/393.png",
    name: "piplup",
    types: ["water"],
  },
  {
    id: 10,
    image:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/197.png",
    name: "umbreon",
    types: ["bug"],
  },
  {
    id: 25,
    image:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/643.png",
    name: "Rashiram",
    types: ["electric"],
  },
  {
    id: 74,
    image:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/244.png",
    name: "Entei",
    types: ["rock", "ground"],
  },
];