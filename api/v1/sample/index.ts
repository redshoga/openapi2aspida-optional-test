/* eslint-disable */
export type Methods = {
  get: {
    query: {
      required_query: string
      not_required_query?: string
    }

    status: 200

    resBody: {
      sample?: string
    }
  }
}
