import { MainMenu } from "./components/MainMenu"
import { StoresList } from "./components/StoresList"



function App() {
 

  return (
    <div className="py-10 h-screen flex h-9/12 justify-center">
            <div className="bg-light-grey w-4/12 flex-col justify-center rounded-md"> 
                <div className="border p-4">
                    <StoresList/>
                </div>
                <div className="border text-center text-lg">
                    <button className="w-6/12 py-6 transition ease-in-out delay-150 bg-blue text-white p-2 rounded-bl-md hover:bg-orange">Mapa</button>
                    <button className="w-6/12 py-6 transition ease-in-out delay-150 bg-blue text-white p-2 rounded-br-md hover:bg-orange">Lista</button>
                </div>
            </div>
        </div>
      
  )
}

export default App
