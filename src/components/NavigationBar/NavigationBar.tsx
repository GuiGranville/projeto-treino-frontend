import "./styleNavigationBar.scss";
import iconTreino from "../../assets/iconTreino.svg"
import iconBook from "../../assets/iconBook.svg"
import iconUser from "../../assets/iconUser.svg"

export default function NavigationBar() {

    return (
        <div className="navigationBar-container">
            <div className="navigationBar-container-treino">
                <div>

                    <img src={iconTreino} alt="" />
                    <label htmlFor="">Treino</label>
                </div>
            </div>

            <div className="navigationBar-container-alimentacao">
                <div>

                    <img src={iconBook} alt="" />
                    <label htmlFor="">Alimentação</label>
                </div>
            </div>

            <div className="navigationBar-container-perfil">
                <div>

                    <img src={iconUser} alt="" />
                    <label htmlFor="">Perfil</label>
                </div>
            </div>
        </div>

    )
}