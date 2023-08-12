
const baseUrl =  process.env.NEXT_PUBLIC_BASE_URL

const revalidate =  { next: { revalidate: 30 } }
// 查询block数据
export const queryBlock =async () =>{
    const res = await fetch(baseUrl +"/block",revalidate)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

// 查询block数据
export const queryTxs =async () =>{
    const res = await fetch(baseUrl +"/transaction",revalidate)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

// 根据制定hash 查询交易

// 根据制定block查询查询交易