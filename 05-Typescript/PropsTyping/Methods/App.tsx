import User from '../../05-Typescript/PropsTyping/User.tsx';
import User2 from '../../05-Typescript/PropsTyping/User2.tsx';
import User3 from '../../05-Typescript/PropsTyping/User3.tsx';
import User4 from '../../05-Typescript/PropsTyping/User4.tsx';
import User5 from '../../05-Typescript/PropsTyping/User5.tsx';

const App = () => {
  return (
    <>
    <div>React with TypeScript</div>
    <div><User name="Robin" age={20} isStudent={false}/></div>
    <div><User2 name="Marion" age={18} isStudent={true}/></div>
    <div><User3 name="March" age={16} isStudent={false}/></div>
    
    <User4>
      <p>The Robin Hood original story describes him as a rebel and anti-authority figure; him and his companions were known for robbing and killing figures of authority and giving goods back to the poor. The earliest ballads indicate that he may have lived in Yorkshire or, more famously, Sherwood Forest in Nottinghamshire.</p>
    </User4>
    <div><User5 name="Little John" age={25} isStudent={false}/></div>
    </>
  );
};

export default App;