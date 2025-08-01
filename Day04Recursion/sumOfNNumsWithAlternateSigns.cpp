#include <iostream>
using namespace std;

// recursive function
int f(int n) {
    // base case
    if(n == 0) {
        return 0;
    }
    // assumption / recursive function call
    // if n is even
    if(n % 2 == 0) {
        // previous sign is negative
        return f(n - 1) - n;
    } 
    return f(n - 1) + n;
}

int main() {
    int n = 5;
    // function call
    cout << f(n) << endl;
    return 0;
}
