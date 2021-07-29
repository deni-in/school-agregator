import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAllCategories,
  removeCategory,
  selectAllCategories,
} from "../../redux/features/categories";
import {
  loadAllSchools,
  removeSchool,
  selectAllSchools,
} from "../../redux/features/schools";
import {
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Admin(props) {
  const dispatch = useDispatch();

  const schools = useSelector(selectAllSchools);

  const categories = useSelector(selectAllCategories);

  const classes = useStyles();

  const handleRemoveSchool = (id) => {
    dispatch(removeSchool(id));
  };

  const handleRemoveCategory = (categoryId) => {
    dispatch(removeCategory(categoryId));
  };

  useEffect(() => {
    dispatch(loadAllSchools());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadAllCategories());
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Категории</TableCell>
          </TableRow>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.name}>
                <TableCell>{category.name}</TableCell>
                <TableCell>ID: {category._id}</TableCell>
                <TableCell align="right">
                  <Button>Изменить</Button>
                  <Button
                    onClick={() => {
                      handleRemoveCategory(category._id);
                    }}
                  >
                    Удалить
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableRow>
            <TableCell>Школа</TableCell>
            <TableCell align="right">Категория</TableCell>
            <TableCell align="right">Лого</TableCell>
            <TableCell align="right">Рейтинг</TableCell>
            <TableCell align="right">Онлайн</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right">Описание</TableCell>
            <TableCell align="right">Локация</TableCell>
            <TableCell align="right">Срок(месяцев)</TableCell>
            <TableCell align="right">Добавлено</TableCell>
            <TableCell align="right">Изменено</TableCell>
            <TableCell align="right">Инструменты</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schools.map((school) => (
            <TableRow key={school.name}>
              <TableCell component="th" scope="row">
                {school.name}
              </TableCell>
              <TableCell align="right">{school.category.name}</TableCell>
              <TableCell align="right">{school.logo}</TableCell>
              <TableCell align="right">{school.rating}</TableCell>
              <TableCell align="right">
                {school.onlineOption ? "Есть" : "Нет"}
              </TableCell>
              <TableCell align="right">{school.price}</TableCell>
              <TableCell align="right">{school.description}</TableCell>
              <TableCell align="right">{school.location}</TableCell>
              <TableCell align="right">{school.term}</TableCell>
              <TableCell align="right">{school.createdAt}</TableCell>
              <TableCell align="right">{school.updatedAt}</TableCell>
              <TableCell align="right">
                <Button>Изменить</Button>
                <Button
                  onClick={() => {
                    handleRemoveSchool(school._id);
                  }}
                >
                  Удалить
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Admin;
