#include <stdio.h>
#define ROW 3
#define COL 3
int main()
{
    int mat1[ROW][COL], mat2[ROW][COL], mat3[ROW][COL], i, j;
    printf("Enter the elements of mat1 (%dX%d) row wise :", ROW, COL);
    for (i = 0; i < ROW; i++)
    {
        for (j = 0; j < COL; j++)
        {
            scanf("%d", &mat1[ROW][COL]);
        }
    }
    printf("Enter the elements of mat2 (%dX%d) row wise :", ROW, COL);
    for (i = 0; i < ROW; i++)
    {
        for (j = 0; j < COL; j++)
        {
            scanf("%d", &mat2[ROW][COL]);
        }
    }
    mat3[ROW][COL] = mat1[ROW][COL] + mat2[ROW][COL];
    printf("Addition of mat1 and mat2 :");
    for (i = 0; i < ROW; i++)
    {
        for (j = 0; j < COL; j++)
        {
            printf("%d\t",mat3[ROW][COL]);
        }
    }
}

Matrix ADDITION