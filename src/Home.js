import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import './home.css';
import Section from './Section';
import SideBar from './SideBar';
import Titre from './Titre';

function Home({ spotify }) {
    const [datas] = useState([
        {id:1, name: "Happy Beats", img: "https://i.scdn.co/image/ab67706f00000002fe0099a8dcd3054706ffc92f"},
        {id:1, name: "Decouvertes de la semaine", img: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/88cadmI6-cjikDIJEaM9irWnCfrBnUODa6V3HxO087RSYwAyC4hPvpnGbkMFDkCfsLh-pIr_r7WxEppPV-xncH-oI6jp2cI92t_MCEOu5LY=/MTQ6NTU6MDFUOTEtOTAtMQ=="},
        {id:1, name: "Ma playlist n 5", img: "https://i.scdn.co/image/ab67616d00001e02a108e07c661f9fc54de9c43a"},
        {id:1, name: "Happy Beats", img: "https://i.scdn.co/image/ab67706f00000002fe0099a8dcd3054706ffc92f"},
        {id:1, name: "Ma playlist n 5", img: "https://i.scdn.co/image/ab67616d00001e02a108e07c661f9fc54de9c43a"},
        {id:1, name: "Happy Beats", img: "https://i.scdn.co/image/ab67706f00000002fe0099a8dcd3054706ffc92f"}
    ])
const [titres] = useState([
    {id: 1, titre:'Top Artistes Tunisie 2020', description:'Les artistes les plus streamés en Tunisie sur Spotify en 2020. Vainqueur : A.L.A.', img:'https://i.scdn.co/image/ab67706f00000002a3f0a06fbdce18fc0a20436b'},
    {id: 2, titre:'Top Artistes Algérie 2020', description:'Les artistes les plus streamés en Algérie sur Spotify en 2020. Vainqueur : Soolking.', img:'https://i.scdn.co/image/ab67706f000000023c8432f03af2aee7011237de'},
    {id: 3, titre:'Top Artistes Tunisie 2020', description:'Les artistes les plus streamés en Tunisie sur Spotify en 2020. Vainqueur : A.L.A.', img:'	https://i.scdn.co/image/ab67706f000000020f3825337766050b7ed85eae'}
])
    return (
        <div className="bodyMain">
            <div className="player1">

                    <div className="sidebar1">
                            <SideBar/>
                    </div>

                    <div className="body1">
                        <Header className="header"/>
                        <div className="bonsoir">
                            <div>
                               <h2>Bonsoir</h2> 
                            </div>
                            <div className="row">
                               {
                                   datas.map(data =>(
                                       <Section 
                                       key={data.id}
                                       img={data.img}
                                       name={data.name}
                                       />
                                   ))
                               }
                            </div>
                            
                        </div>
                        <div className="titres">
                            <div className="titre">
                               <h2>les titres et artistes phares de 2020</h2> 
                               <p> Redecouvrez les titres et artistes phares de 2020</p>
                            </div>
                        </div>

                        <div className="sectionsTitre">
                                 {
                                     titres.map(data=>(
                                         <Titre 
                                         id={data.id}
                                         titre={data.titre}
                                         description={data.description}
                                         img={data.img}
                                         />
                                     ))
                                 }
                          </div>

                    </div>
                    

            </div>

           

             <div className="footer1">
                     <Footer/>
             </div>
        </div>
    )
}

export default Home