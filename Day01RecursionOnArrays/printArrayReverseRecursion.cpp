#include <iostream>
using namespace std;

void f(int arr[], int idx, int n) {
    // base case
    if(idx == n) {
        return;
    }
    // assumption / recursive function call
    f(arr, idx + 1, n);
    // self work
    cout << arr[idx] << endl;
}


int main() {
    int n = 5;
    int arr[] = {1, 2, 3, 4, 5};
    // function call
    f(arr, 0, n);
    return 0;
}

