import { ApiObject } from "../apiObject"

export const productServices = {
    getProducts(options={}) {
        let params = new URLSearchParams()

        // params.append('q',options.searchQuery)
        if (options.limit) params.append('limit', options.limit)
        if (options.skip) params.append('skip', options.skip)

        let url = `${ApiObject.BASE_URL}${ApiObject.END_POINTS.PRODUCT}?${params.toString()}`
        console.log(url)
        return fetch(url)
            .then((res) => res.json())

    },
    getCatsList() {
        let url = `${ApiObject.BASE_URL}${ApiObject.END_POINTS.CATEGORY_LLIST}`
        console.log(url)
        return fetch(url)
            .then((res => res.json()))
    },
    getBrandList() {
        let url = `${ApiObject.BASE_URL}${ApiObject.END_POINTS.CATEGORY_LLIST}`
        console.log(url)
        return fetch(url)
            .then((res => res.json()))
    }
}