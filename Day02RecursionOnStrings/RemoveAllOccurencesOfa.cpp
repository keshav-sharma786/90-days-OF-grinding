#include <iostream>
#include <string>
using namespace std;

string f(string s, int idx, int n) {
    // base case
    if(idx == n) {
        return "";
    }
    // i will basically a cuurent string which will be currently empty
    string curr = "";
    // in this string curr variable, i have already stored my current character.
    // if that current char is 'a', then i will return the empty string.
    // otherwise i will return my current char only.
    curr += s[idx];
    return ((s[idx] == 'a') ? "" : curr) + f(s, idx + 1, n);
}

int main()
{
    string s = "abcax";
    int n = 5;
    cout << f(s, 0, n) << endl;
    return 0;
}
