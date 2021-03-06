import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  loadAllCategories,
  removeCategory,
  selectAllCategories, setEditingCategory,
} from "../../redux/features/categories";
import {
  addSchool,
  loadAllSchools,
  removeSchool,
  selectAllSchools, selectSchoolsLoading, setEditingSchool,
} from "../../redux/features/schools";
import {
  Box,
  Button, CircularProgress,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import EditCategoryDialog from '../EditCategoryDialog';
import EditSchoolDialog from '../EditSchoolDialog';

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

function Admin() {
  const dispatch = useDispatch();
  const schools = useSelector(selectAllSchools);
  const categories = useSelector(selectAllCategories);
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadAllSchools());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadAllCategories());
  }, [dispatch]);
//======================================================
  const handleRemoveSchool = (id) => {
    dispatch(removeSchool(id));
  };
  const handleRemoveCategory = (categoryId) => {
    dispatch(removeCategory(categoryId));
  };

  //======================================================

  const [categoryName, setCategoryName] = useState("");
  const saveCategoryName = (e) => {
    setCategoryName(e.target.value)};

  const handleAddName = () => {
    dispatch(addCategory(categoryName));
    setCategoryName("")};

  //======================================================

  const [schoolName, setSchoolName] = useState('')
  const saveSchoolName = (e) => {
    setSchoolName(e.target.value)}

  const [schoolCategory, setSchoolCategory] = useState('')
  const saveSchoolCategory = (e) => {
    setSchoolCategory(e.target.value)}

  const [schoolLogo, setSchoolLogo] = useState('')
  const saveSchoolLogo = (e) => {
    setSchoolLogo(e.target.value)}

  const [schoolRating, setSchoolRating] = useState('')
  const saveSchoolRating = (e) => {
    setSchoolRating(e.target.value)}

  const [schoolOnline, setSchoolOnline] = useState('')
  const saveSchoolOnline = (e) => {
    setSchoolOnline(e.target.value)
  }

  const [schoolPrice, setSchoolPrice] = useState('')
  const saveSchoolPrice = (e) => {
    setSchoolPrice(e.target.value)
  }

  const [schoolDescription, setSchoolDescription] = useState('')
  const saveSchoolDescription = (e) => {
    setSchoolDescription(e.target.value)
  }

  const [schoolLocation, setSchoolLocation] = useState('')
  const saveSchoolLocation = (e) => {
    setSchoolLocation(e.target.value)
  }

  const [schoolTerm, setSchoolTerm] = useState('')
  const saveSchoolTerm = (e) => {
    setSchoolTerm(e.target.value)
  }

  const handleAddSchool = () => {
    dispatch(addSchool({
      name: schoolName,
      category: schoolCategory,
      logo: schoolLogo,
      rating: schoolRating,
      onlineOption: schoolOnline,
      price: schoolPrice,
      description: schoolDescription,
      location: schoolLocation,
      term: schoolTerm
    }) )
  }

  //======================================================

  const [open, setOpen] = useState(false);

  const [schoolOpen, setSchoolOpen] = useState(false)

  const handleClickOpen = (category) => {
    dispatch(setEditingCategory(category))
    setOpen(true);
  };

  const handleClickOpenSchool = (school) => {
    dispatch(setEditingSchool(school))

  };

  const loading = useSelector(selectSchoolsLoading);

  if (loading) {
    return <Box style={{ textAlign: "center", marginTop: "10%" }}>
      <CircularProgress />
    </Box>
  }

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>??????????????????</TableCell>
          </TableRow>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  placeholder="???????????????? ??????????????????"
                  label="???????????????? ??????????????????"
                  onChange={saveCategoryName}
                  value={categoryName}
                />
              </TableCell>
              <TableCell>
                {' '}
              </TableCell>
              <TableCell>
                <Button onClick={handleAddName}>????????????????</Button>
              </TableCell>
            </TableRow>
            {categories.map((category) => (
              <TableRow key={category.name}>
                <TableCell>{category.name}</TableCell>
                <TableCell>ID: {category._id}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleClickOpen(category)}>????????????????</Button>
                  <Button
                    onClick={() => {
                      handleRemoveCategory(category._id);
                    }}
                  >
                    ??????????????
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <EditCategoryDialog setOpen={setOpen} open={open}/>
          </TableBody>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <TextField
                placeholder="???????????????? ??????????"
                label="???????????????? ??????????"
                onChange={saveSchoolName}
                value={schoolName}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="ID ??????????????????"
                label="ID ??????????????????"
                onChange={saveSchoolCategory}
                value={schoolCategory}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="???????????? ???? ????????"
                label="???????????? ???? ????????"
                onChange={saveSchoolLogo}
                value={schoolLogo}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="1-10"
                label="1-10"
                onChange={saveSchoolRating}
                value={schoolRating}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="true/false"
                label="true/false"
                onChange={saveSchoolOnline}
                value={schoolOnline}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="???????? ??"
                label="???????? ??"
                onChange={saveSchoolPrice}
                value={schoolPrice}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="????????????????"
                label="????????????????"
                onChange={saveSchoolDescription}
                value={schoolDescription}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="??????????"
                label="??????????"
                onChange={saveSchoolLocation}
                value={schoolLocation}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="????????(??????????????)"
                label="????????(??????????????)"
                onChange={saveSchoolTerm}
                value={schoolTerm}
              />
            </TableCell>
            <TableCell align="right">
              {' '}
            </TableCell>
            <TableCell>
              <Button onClick={handleAddSchool}>????????????????</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>??????????</TableCell>
            <TableCell>??????????????????</TableCell>
            <TableCell>????????</TableCell>
            <TableCell>??????????????</TableCell>
            <TableCell>????????????</TableCell>
            <TableCell>????????</TableCell>
            <TableCell>??????????????</TableCell>
            <TableCell>????????(??????????????)</TableCell>
            <TableCell>??????????????????</TableCell>
            <TableCell>????????????????</TableCell>
            <TableCell>??????????????????????</TableCell>
          </TableRow>
          {schools.map((school) => (
            <TableRow key={school.name}>
              <TableCell component="th" scope="row">
                {school.name}
              </TableCell>
              <TableCell align="right">{school.category?.name}</TableCell>
              <TableCell align="right"><img src={school.logo} style={{ width: 80}}/></TableCell>
              <TableCell align="right">{school.rating}</TableCell>
              <TableCell align="right">
                {school.onlineOption ? "????????" : "??????"}
              </TableCell>
              <TableCell align="right">{school.price}</TableCell>
              <TableCell align="right">{school.location}</TableCell>
              <TableCell align="right">{school.term}</TableCell>
              <TableCell align="right">{school.createdAt}</TableCell>
              <TableCell align="right">{school.updatedAt}</TableCell>
              <TableCell align="right">
                <Button onClick={() => handleClickOpenSchool(school)}>????????????????</Button>
                <Button
                  onClick={() => {
                    handleRemoveSchool(school._id);
                  }}
                >
                  ??????????????
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <EditSchoolDialog setSchoolOpen={setSchoolOpen} schoolOpen={schoolOpen}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Admin;
