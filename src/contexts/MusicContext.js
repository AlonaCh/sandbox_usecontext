import { createContext } from 'react';
export const MusicContext = createContext(); //it will return a context object; MusicContext is basically a component that will provide the context to its children, and the children will consume the context using the useContext hook