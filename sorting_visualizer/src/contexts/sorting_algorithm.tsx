"use client";

import type { ReactNode, Dispatch, SetStateAction } from "react";
import { createContext, useContext, useState } from "react";

// types
type TSortingAlgorithm = "bubble" | "insertion" | "selection" | "merge" | "quick";

type TSortingAlgorithmContext = {
    arrayToSort: number[];
    setArrayToSort: Dispatch<SetStateAction<number[]>>;
    selectedAlgorithm: TSortingAlgorithm;
    setSelectedAlgorithm: Dispatch<SetStateAction<TSortingAlgorithm>>;
    isSorting: boolean;
    setIsSorting: Dispatch<SetStateAction<boolean>>;
    animationSpeed: number;
    setAnimationSpeed: Dispatch<SetStateAction<number>>;
    isAnimationComplete: boolean;
    setIsAnimationComplete: Dispatch<SetStateAction<boolean>>;
    resetArrayAndAnimation: () => void;
    runAnimation: () => void;
};

// contants
const MIN_ANIMATION_SPEED = 100;
const MAX_ANIMATION_SPEED = 400;

// context
const SortingAlgorithmContext = createContext<TSortingAlgorithmContext | undefined>(undefined);

const SortingAlgorithmProvider = (p: { children: ReactNode }) => {
    const [arrayToSort, setArrayToSort] = useState<number[]>([100, 200, 350, 75]);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<TSortingAlgorithm>("insertion");
    const [isSorting, setIsSorting] = useState<boolean>(false);
    const [animationSpeed, setAnimationSpeed] = useState<number>(MAX_ANIMATION_SPEED);
    const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false);

    const resetArrayAndAnimation = () => { };

    const runAnimation = () => { };

    return (
        <SortingAlgorithmContext.Provider
            value={{
                arrayToSort,
                setArrayToSort,
                selectedAlgorithm,
                setSelectedAlgorithm,
                isSorting,
                setIsSorting,
                animationSpeed,
                setAnimationSpeed,
                isAnimationComplete,
                setIsAnimationComplete,
                resetArrayAndAnimation,
                runAnimation,
            }}
        >
            {p.children}
        </SortingAlgorithmContext.Provider>
    );
};

const useSortingAlgorithm = () => {
    return useContext(SortingAlgorithmContext);
};

export { SortingAlgorithmProvider, useSortingAlgorithm };
