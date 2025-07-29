#include <iostream>
using namespace std;

void f(int *arr, int idx, int n) {
    // base case
    if(idx == n) {
        return;
    }
    // self work
    
    cout << arr[idx] << endl;
    // recursive function call / Assumption
    f(arr, idx + 1, n);
}

int main() {

    int n = 5;
    
    int arr[] = {6, 1, 9, 3, 4};
    // function call
    
    f(arr, 0, n);
    
    return 0;
}

