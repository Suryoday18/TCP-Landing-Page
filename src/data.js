const arr = [
    {
        "Month": "FEB 2023",
        "LoadCount": 12,
        "Utilization": 3.453125
    },
    {
        "Month": "JAN 2023",
        "LoadCount": 67,
        "Utilization": 12.288709677419348
    },
    {
        "Month": "DEC 2022",
        "LoadCount": 35,
        "Utilization": 4.838709677419355
    },
    {
        "Month": "NOV 2022",
        "LoadCount": 20,
        "Utilization": 4.416666666666667
    },
]

function DateSorting(arr){
    return arr.reverse()
}

console.log(DateSorting(arr));