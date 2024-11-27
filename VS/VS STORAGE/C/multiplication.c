#include <stdio.h>
#define ROW1 1
#define COL1 3
#define ROW2 3
#define COL2 1
#define ROW3 1
#define COL3 1
void main()
{
    int mat1[ROW1][COL1], mat2[ROW2][COL2], mat3[ROW3][COL3], i, j, k, l;
    int sum=0;
    printf("Enter the elements of matrix1 (%dX%d) row-wise ", i, j);
    for (i = 0; i < ROW1; i++)
    {
        for (j = 0; j < COL1; j++)
        {
            scanf("%d", &mat1[i][j]);
        }
    }
    printf("Enter the elements of matrix2 (%dX%d) row-wise ", i, j);
    for (i = 0; i < ROW2; i++)
    {
        for (j = 0; j < COL2; j++)
        {
            scanf("%d", &mat2[i][j]);
        }
    }
    // printf("Enter the elements of matrix1 (%dX%d) row-wise ",i,j);
    for (i = 0; i < ROW1; i++)
    {
        for (j = 0; j < COL1; j++)
        {
            for (k = 0; k < ROW2; k++)
            {
                for (l = 0; l < COL3; l++)
                    sum+= mat1[i][k]*mat2[k][j];
                    mat3[i][j]=sum;
            }
        }
    }
    printf("Multiplication of matrix 1 and matrix 2 is : ");
    for(i=0;i<ROW3;i++){
        for(j=0;j<COL3;j++){
            printf("%d",mat3[i][j]);
            printf("\n");
            printf("%d",sum);
        }
    }
}
Matrix Multiplication