import React ,{useState} from 'react'
import Input from '../../components/forms/Input.jsx'
import Button from '../../components/forms/Button.jsx'
import Card from './Card.jsx'
import Header from './Header'
import ProtectedInput from '../../components/forms/ProtectedInput.jsx'
import '../../styles/form/signinStyle.css'


function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username , password);
  }

  return (
    <div className=" signin">
      <div className="form">
        <Header
          className="header"
          class="heading border-t-1 border-gray-200 mt-4 w-72 "
        />
        <form onSubmit={handleSubmit}>
          <Input
            name="Nom d'utilisateur"
            placeholder="Entrez votre nom d'utilisateur"
            type="text"
            value={username}
            onChange={(e) => {setUsername(e.target.value)}}
          />
          <ProtectedInput
            name="Mot de passe"
            placeholder="Entrez votre mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" text="S'authentifier" />
        </form>
      </div>
      <Card
        className="w-full h-full text-white cardV2"
        class="girl"
        gridClass="grid"
      />
    </div>
  );
}

export default Signin