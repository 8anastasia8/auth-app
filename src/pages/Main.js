import Login from "./Login";
import {BrowserRouter, Routes, Route, Outlet, useLocation} from "react-router-dom";
import ResetPassword from "./ResetPassword";
import {motion} from "framer-motion";

const PageLayout = ({ children }) => children;
const pageVariants = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
};

const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.3
};

const AnimationLayout = () => {
    const { pathname } = useLocation();
    return (
        <PageLayout>
            <motion.div
                key={pathname}
                initial="initial"
                animate="in"
                variants={pageVariants}
                transition={pageTransition}
            >
                <Outlet />
            </motion.div>
        </PageLayout>
    );
};


export default function Main(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AnimationLayout />}>
                    <Route path='*' element={<Login/>}/>
                    <Route path='/auth' element={<Login/>}/>
                    <Route path='/auth/reset' element={<ResetPassword/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}