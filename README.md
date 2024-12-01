# MrGrapherAsFilter

1. The actual data is taken (of any length) from the user so that it can be encrypted.
2. The data is taken in the form of a character basis which is then stored in the form pixel of
the value of RBG. So through image actual data is being retrieved.
3. Finally, a password is required which will be acting as a key to unlock the actual data at the
time of decryption of data
Fig4: Encryption
5
Algorithm Of Encryption
1. Firstly input the image taken by the user.
2. Next, insert the password.
3. Now insert the actual data.
4. Now find out the length of the actual data.
5. Now, generate n random number in a range of height of an image.
Where n is the length of a string.
6. Then extract the pixel value of generated coordinate[x,y]
Where x and y are random numbers which the algorithm has generated.
7. Now extract the ASCII value of each character in the combination where one set contains
3 characters.
8. Firstly, Declare two empty string d and cord.
9. Now extract the RBG value of the coordinate.
// suppose R, B and G are those variables
Then:
r= ASCII value of the first character of a pair.
b=ASCII value of the second character of the same pair.
g=ASCII value of the third character of the same pair.
r_i=R-r
b_i=B-b
g_i=G-g
10. Now if any of these values are negative then concatenate it with "N" else "P" at the
beginning of the value and finally concatenate in the $d.
d=d+s_r+r_i+s_b+b_i+s_g+g_i
//Where s_r, s_b, and s_g shows sign of r_i, b_i, and g_i respectively in the form of N
and P.
//suppose values have been extracted from x, y coordinate.
11. Now convert x and y in the form of a string of length four. //suppose values of x and y
is
//x=10
//y=3244
//then string format will be
//x="0010"
//y="3244"
12. Later encrypt these coordinates with the help of password as follows:
v1=p[0]-x[0]
v2=p[1]-x[1]
v3=p[2]-x[2]
v4=p[3]-x[3]
v5=p[4]-x[4]
v6=p[5]-x[5]
v7=p[6]-x[6]
v8=p[7]-x[7]
13. Concatenate these values with $cord
cord =cord+v1+v2+v3+v4+v5+v6+v7+v8
14. Now store these values in the form of string and repeat same process until all characters of
the data follow same p
