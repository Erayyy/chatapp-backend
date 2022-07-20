import { useWindowDimensions } from "./useWindowDimensions";

export function useWindowRatio() {
    const { height, width } = useWindowDimensions();
    return width / height;
}

export default useWindowRatio;