export function getPathParam(url: string) {
    const urlSegment: Array<String> = url.split("/")
    return urlSegment[urlSegment.length - 1]
}