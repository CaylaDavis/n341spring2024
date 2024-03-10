#include <iostream>
#include <fstream>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

TreeNode* insert(TreeNode* root, int val) {
    if (!root)
        return new TreeNode(val);
    if (val < root->val)
        root->left = insert(root->left, val);
    else if (val > root->val)
        root->right = insert(root->right, val);
    return root;
}

void printRange(TreeNode* root, int k1, int k2) {
    if (!root) return;

    if (root->val >= k1 && root->val <= k2) {
        cout << root->val << " ";
        printRange(root->left, k1, k2);
        printRange(root->right, k1, k2);
    } else if (root->val < k1) {
        printRange(root->right, k1, k2);
    } else {
        printRange(root->left, k1, k2);
    }
}

TreeNode* constructBSTFromFile(const string& filename) {
    ifstream file(filename);
    int num;
    TreeNode* root = nullptr;
    
    while (file >> num) {
        root = insert(root, num);
        
        char c;
        file.get(c);
        if (file.eof() || c == '\n') {
            break; 
        }
    }
    return root;
}


void deleteTree(TreeNode* root) {
    if (root == nullptr) return;
    deleteTree(root->left);
    deleteTree(root->right);
    delete root;
}

int main() {
    string filename = "input.txt"; 
    TreeNode* root = constructBSTFromFile(filename);

    int k1, k2;
    cout << "Enter k1 and k2: ";
    cin >> k1 >> k2;

    cout << "Nodes between " << k1 << " and " << k2 << ": ";
    printRange(root, k1, k2);
    cout << endl;

    deleteTree(root);

    return 0;
}
