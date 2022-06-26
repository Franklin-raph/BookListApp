# def addBinary(a: str, b: str) -> str:
#         ai=int(a,2)
#         bi=int(b,2)
        
#         ci= ai+bi
#         return bin(ci)[2:]

# print(addBinary("1010", "1011"))

# def length_of_last_word(s):
#     s.strip()
#     lis = list(s.split(" "))
#     listLength = len(lis)
#     return len(lis[listLength - 1])
# print(length_of_last_word("Hello world    "))






# const filterBooks = (title) => {
#     Array.from(book_list.children)
#         .filter((value)=>{
#             return !value.textContent.includes(title)
#         }).forEach((value)=>{
#             value.classList.add("filtered")
#         })

#     Array.from(book_list.children)
#         .filter((value)=>{
#             return value.textContent.includes(title)
#         }).forEach((value)=>{
#             value.classList.remove("filtered")
#         })
# }

# search.addEventListener("keyup", () => {
#     const searchValue = search.value.trim();
#     filterBooks(searchValue)
# })


a = 12
if a > 2:
    if a % 2==0:
        print("Yes")
    else:
        print("No")
else:
    print("M")

b = "Python is cool"
print(b[7:-5])

def my_finc(c=89):
    print("c: {}".format(c))

my_finc(12)