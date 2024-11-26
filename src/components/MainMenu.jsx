import { StoresList } from "./StoresList"

export const MainMenu = () => {
    return (
        <div className="py-10 border flex h-9/12 justify-center">
            <div className="bg-light-grey m-4 w-4/12 flex-column rounded-md"> 
                <div className="flex-1 p-4">
                    <StoresList/>
                </div>
                <div className="flex-2 mt-10 text-center text-lg">
                    <button className="w-6/12 py-6 transition ease-in-out delay-150 bg-blue text-white p-2 rounded-bl-md hover:bg-orange">Mapa</button>
                    <button className="w-6/12 py-6 transition ease-in-out delay-150 bg-blue text-white p-2 rounded-br-md hover:bg-orange">Lista</button>
                </div>
            </div>
        </div>
    )
}