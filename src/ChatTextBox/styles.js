const styles = theme => ({

  sendBtn: {
    color: theme.palette.primary.main,
    color: 'blue',
    cursor: 'pointer',
    '&:hover': {
      color: 'gray'
    }
  },
  emojiBtn: {
    color:'grey',
    cursor:'pointer',
    padding: '0px 6px 0px 9px',
    '&:hover' : {
      color: 'red'
    }
  },
  emojiBtn1: {
    color:'grey',
    cursor:'pointer',
    padding: '0px  10px',
    '&:hover' : {
      color: 'red'
    }
  },

  chatTextBoxContainer: {
    position: 'absolute',
    border: '1.5px solid gray',
    borderRadius: '2px',
    bottom: '15px',
    left: '315px',
    boxSizing: 'border-box',
    overflow: 'auto',
    width: 'calc(95% - 300px - 50px)'
  },

  chatTextBox: {
    outline: 'none',
    autoFocus: 'none',
    width: 'calc(90% - 25px)'
  }

});

export default styles;