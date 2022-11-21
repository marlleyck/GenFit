import { createContext, ReactNode, useState } from "react";

type TrainingContextType = {
    trainingList: string[];
}

type TrainingContextProps = {
    children: ReactNode;
}

export const TrainingContext = createContext<TrainingContextType>({} as TrainingContextType)

export const TrainingContextProvider = ({ children }: TrainingContextProps) => {
    const trainingList: any = [
        {
            title: 'Terça'
        },
        {
            title: 'Mamae'
        }
    ]

    return (
        <TrainingContext.Provider 
        value={{ trainingList }}>
            {children}
        </TrainingContext.Provider>
    );
}