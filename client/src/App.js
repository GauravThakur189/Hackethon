// import './App.css';
// import Filterbar from './Components/Filterbar';
// import Navbar from './Components/Navbar';
// import { TaskProvider } from './Context/TaskContext';
// import Tasks from "./Components/TaskList"
// import { SignedIn,SignInButton,SignedOut,UserButton } from '@clerk/clerk-react';
 
// function App() {
//     return (
//         <>
//             <TaskProvider>
//                 <Navbar />
//                 <Filterbar />
//                 <Tasks />
//             </TaskProvider>
//         </>
//     );
// }
 
// export default App;


import './App.css';
import Filterbar from './Components/Filterbar';
import Navbar from './Components/Navbar';
import { TaskProvider } from './Context/TaskContext';
import Tasks from "./Components/TaskList";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function App() {
    return (
        <>
            <TaskProvider>
                <Navbar />
                <SignedIn>
                    <Filterbar />
                    <Tasks />
                </SignedIn>
                <SignedOut>
                    <div>
                        <h2>Please sign in to access your tasks.</h2>
                        <SignInButton />
                    </div>
                </SignedOut>
            </TaskProvider>
        </>
    );
}

export default App;
