import { Container } from "./Container"

export const containerBuilder = (containerId: number, name: string): Container => {
    return {containerID: containerId, name: name}
}